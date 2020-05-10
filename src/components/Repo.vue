<template>
  <div class="repo">
    <div class="repo__name">
      <a class="repo--link" :href="repo.repoLink" target="_blank">{{
        repo.repoName
      }}</a>
    </div>
    <span class="repo__forked-from" v-if="repo.isForked">
      forked from
      <a class="repo--link" :href="url + repo.forkedFrom" target="_blank">
        {{ repo.forkedFrom }}
      </a>
    </span>
    <div class="repo__description">
      {{ repo.description }}
    </div>
    <div class="repo__info">
      <div class="prog-lang repo__info--item" v-if="repo.progLang">
        <span
          class="repo-language-color"
          :style="{ 'background-color': color[repo.progLang] }"
        ></span>
        <span class="item-value lang">{{ repo.progLang }}</span>
      </div>
      <div class="repo__stargazers repo__info--item" v-if="repo.stargazers">
        <svg
          aria-label="star"
          class="octicon octicon-star"
          viewBox="0 0 14 16"
          version="1.1"
          width="14"
          height="16"
          role="img"
        >
          <path
            fill-rule="evenodd"
            d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
          ></path>
        </svg>
        <span class="item-value count">{{ repo.stargazers }}</span>
      </div>
      <div class="repo__fork-count repo__info--item" v-if="repo.forkCount">
        <svg
          aria-label="fork"
          class="octicon octicon-repo-forked"
          viewBox="0 0 10 16"
          version="1.1"
          width="10"
          height="16"
          role="img"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
          ></path>
        </svg>
        <span class="item-value count">{{ repo.forkCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://github.com/",
      color: {
        JavaScript: "#f1e05a",
        HTML: "#e34c26",
        CSS: "#563d7c",
        PHP: "#4F5D95",
        Shell: "#89e051",
        C: "#555555",
        "C#": "#178600",
        "C++": "#f34b7d",
        Python: "#3572A5",
        Rust: "#dea584",
        TypeScript: "#2b7489"
      }
    };
  },
  props: {
    repo: {
      type: Object
    }
  }
};
</script>

<style scoped>
.repo {
  width: 45%;
  margin: 10px;
  padding: 0 0.5em;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: -1px 1px 8px rgba(0, 0, 0, 0.1);
}

.repo__name {
  font-size: 22px;
  font-weight: bold;
}

.repo--link {
  margin: 0.5em 0 0 0;
  display: inline-block;
  color: #4444e2;
  cursor: pointer;
  text-decoration: none;
}

.repo--link:hover {
  text-decoration: underline;
}

.repo__forked-from {
  display: block;
  font-size: 12px;
}

.repo__description {
  display: inline-block;
  font-size: 14px;
  margin: 20px 0 10px 0;
}

.repo__info {
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 0.2em 0 0.4em 0;
}

.repo__info--item + .repo__info--item {
  padding-left: 10px;
}

.repo__info--item {
  display: flex;
  align-items: center;
}

.item-value {
  padding-left: 5px;
}
.repo-language-color {
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background-color: rgb(31, 197, 106);
}
.star {
  fill: gray;
}

@media screen and (max-width: 600px) {
  .repo {
    width: 100%;
  }
}
</style>
