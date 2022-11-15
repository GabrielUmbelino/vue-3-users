<script lang="ts">
import { useStore } from "vuex";
import UserTable from "../components/UserTable.vue";
import SearchBar from "../components/SearchBar.vue";
import LoadableContent from "../components/LoadableContent.vue";
import { computed, onMounted } from "vue";

export default {
  components: { SearchBar, UserTable, LoadableContent },
  setup() {
    const store = useStore();
    const onSearch = (searchParam = "") => {
      store.dispatch("fetchUsers", {
        searchParam,
      });
    };

    onMounted(onSearch);

    return {
      onSearch,
      users: computed(() => store.state.users),
    };
  },
};
</script>

<template>
  <main>
    <div class="max-w-2xl mx-auto">
      <div class="relative overflow-x-auto sm:rounded-lg">
        <SearchBar @search="onSearch" />
        <LoadableContent :isLoading="users.loading">
          <UserTable :users="users.content" />
        </LoadableContent>
      </div>
    </div>
  </main>
</template>
