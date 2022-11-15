<script setup lang="ts">
import type { User } from "../models/user";
import type { PropType } from "vue";

defineProps({
  users: Array as PropType<User[]>,
});
</script>
<template>
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        <th scope="col" class="px-6 py-3">Name</th>
        <th scope="col" class="px-6 py-3">Company</th>
        <th scope="col" class="px-6 py-3">City</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="u in users"
        :key="u.id"
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          {{ u.name }}
        </th>
        <td class="px-6 py-4">{{ u.company.name }}</td>
        <td class="px-6 py-4">{{ u.address.city }}</td>
      </tr>
    </tbody>
  </table>
</template>
