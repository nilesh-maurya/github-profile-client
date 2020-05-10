<template>
  <div id="app">
    <div class="header">
      <div class="navbar">
        <img class="logo" src="./assets/fluidicon.png" alt="" />
        <input
          v-model="inputText"
          type="text"
          class="search"
          placeholder="Search username here"
          @keydown.enter="fetchUser"
        />
      </div>
    </div>
    <div class="loading" v-if="isLoading">
      <div class="loading__container">
        <Loader></Loader>
      </div>
    </div>
    <div v-if="user" class="container">
      <user-info :userData="user"></user-info>
      <section class="repo-detail">
        <div class="selectbar">
          <a
            class="selectbar__link"
            v-bind:class="{ 'selectbar__link--active': pinnedActive }"
            @click="active = 'Pinned'"
          >
            Pinned
          </a>
          <a
            class="selectbar__link"
            v-bind:class="{ 'selectbar__link--active': !pinnedActive }"
            @click="active = 'Repositories'"
          >
            Repositories
          </a>
        </div>
        <div class="repository" v-if="pinnedActive">
          <repo
            v-for="(pinnedRepo, i) in user.pinnedRepo"
            :key="i"
            :repo="pinnedRepo"
          ></repo>
        </div>
        <div class="repository" v-else>
          <repo
            v-for="(repo, i) in user.repoData.repos"
            :key="i"
            :repo="repo"
          ></repo>
          <div class="repo__loader" v-if="isRepoLoading">
            <loader></loader>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import UserInfo from "./components/UserInfo.vue";
import Loader from "./components/Loader.vue";
import Repo from "./components/Repo.vue";

export default {
  name: "App",
  data() {
    return {
      active: "Pinned",
      bottom: false,
      inputText: "",
      isLoading: false,
      isRepoLoading: false,
      user: "",
      after: ""
    };
  },
  computed: {
    pinnedActive() {
      return this.active === "Pinned";
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.fetchRepo(this.inputText, this.after);
      }
    }
  },
  components: {
    UserInfo,
    Loader,
    Repo
  },
  methods: {
    fetchUser() {
      this.isLoading = true;
      fetch(`https://github-profile-api.now.sh/api/${this.inputText}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.isLoading = false;
          if (data.username === this.inputText) {
            this.active = "Pinned";
            this.user = data;
            this.after = data.repoData.after;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    isBottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    fetchRepo(username, after) {
      if (after !== "") {
        this.isRepoLoading = true;
        fetch(
          `https://github-profile-api.now.sh/api/${this.inputText}/repos?after=${after}`
        )
          .then(response => {
            return response.json();
          })
          .then(res => {
            this.after = res.repoData.after;
            res.repoData.repos.forEach(repo => {
              this.user.repoData.repos.push(repo);
            });
            this.isRepoLoading = false;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  created() {
    window.addEventListener("scroll", () => {
      if (this.active === "Repositories") {
        this.bottom = this.isBottomVisible();
      }
    });
  }
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  margin: 0 auto;
}

.loading {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  background-color: rgba(243, 243, 243, 0.6);
}

.loading__container {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  text-align: center;
}

.repo__loader {
  width: 100%;
  padding-top: 25px;
  display: flex;
  justify-content: center;
}

.header {
  background-color: #171010;
}

.navbar {
  margin: 0 auto;
  width: 90%;
  max-width: 1000px;
  padding: 0.8em 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: inline-block;
  width: 35px;
  height: 35px;
  margin-right: 10px;
}

.search {
  width: 95%;
  max-width: 500px;
  min-width: 250px;
  padding: 0.5em 1.5em;
  outline: 0;
  border: 2px solid rgb(223, 223, 223);
  border-radius: 50px;
}
.search:hover {
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
}

.container {
  width: 90%;
  max-width: 1000px;
  margin: 50px auto;
}

.selectbar {
  margin: 20px 0;
  display: flex;
  text-align: center;
}

.selectbar__link {
  flex: 1;
  font-size: 18px;
  padding: 10px 0;
  border: 2px solid black;
  cursor: pointer;
}

.selectbar__link--active {
  color: #fff;
  background-color: #000;
}

.repository {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
