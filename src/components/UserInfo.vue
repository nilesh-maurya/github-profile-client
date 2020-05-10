<template>
  <div class="user-info">
    <div class="user">
      <div class="user__avatar">
        <img
          class="user__avatar--img"
          :src="userData.avatar"
          alt="User Profile Picture"
        />
      </div>
      <div class="user__wrap">
        <div class="user__name">
          <h2 class="name">{{ userData.name }}</h2>
          <span class="username">@{{ userData.username }}</span>
        </div>
        <div class="user__social">
          <div class="repo user__social--item">
            <span class="repo-count social--count">{{ userData.repos }}</span
            ><br />
            repositories
          </div>
          <div class="followers user__social--item">
            <span class="followers-count social--count">{{
              userData.followers
            }}</span>
            <br />
            followers
          </div>
          <div class="following user__social--item">
            <span class="following-count social--count">{{
              userData.following
            }}</span>
            <br />
            following
          </div>
        </div>
        <div class="user__bio" v-if="userData.bio">
          <span>{{ userData.bio }}</span>
        </div>
        <div class="user__detail">
          <div class="company" v-if="userData.company">
            <svg
              class="octicon octicon-organization"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"
              ></path>
            </svg>
            <span class="company__name">{{ userData.company }}</span>
          </div>
          <div class="location" v-if="userData.location">
            <svg
              class="octicon octicon-location"
              viewBox="0 0 12 16"
              version="1.1"
              width="12"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
              ></path>
            </svg>
            <span class="location__name">{{ userData.location }}</span>
          </div>
          <div class="blog" v-if="userData.blog">
            <svg
              class="octicon octicon-link"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
              ></path>
            </svg>
            <span class="blog__name">{{ userData.blog }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object
    }
  }
};
</script>

<style scoped>
.clear:after {
  content: "";
  display: table;
  clear: both;
}

.user {
  display: flex;
  align-items: center;
}

.user__avatar {
  display: flex;
  justify-content: center;
  flex: 1;
}
.user__avatar--img {
  width: 70%;
  border-radius: 50%;
}

.user__wrap {
  flex: 1;
}

.user__name .username {
  color: rgb(160, 160, 160);
}

.user__social {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
}

.user__social--item + .user__social--item {
  padding-left: 10px;
}

.social--count {
  font-size: 18px;
  font-weight: bold;
}

.user__bio {
  margin: 20px 0;
}

.user__detail {
  margin: 10px 0;
}
.user__detail span {
  padding-left: 10px;
}

@media screen and (max-width: 600px) {
  .user {
    flex-direction: column;
  }
  .user__name {
    padding: 10px;
    text-align: center;
  }
}
</style>
