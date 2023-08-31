<template>
    <div class="flex items-center gap-x-3 my-5">
        <p class=" text-teal-700 rounded font-mono">Projects</p>
        <div class="border-t border-gray-600 w-full"></div>
    </div>

    <div v-if="error" class="flex flex-col gap-2 items-center">
        <Icon name="solar:server-minimalistic-broken" />
        <p class="font-mono text-3xl text-red-700">Something Went wrong Fetching Data</p>
        <p class="font-mono text-gray-500 text-center">{{ error }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aspernatur.</p>
        <button @click="refresh()" class="bg-teal-900 hover:bg-teal-950 w-fit px-4 py-1 rounded-md font-mono">
            <Icon v-if="pending" name="eos-icons:loading" />
            <p v-else>Try agian</p>
        </button>
    </div>

    <div v-else v-for="(project, index) in data?.projects.slice(0,3)" :key="index" class="group lg:p-5 p-3 lg:mb-1 mb-6 rounded-md hover:bg-teal-200 hover:bg-opacity-5  cursor-pointer">
        <nuxt-link :to="project.url">
        <div class="flex lg:flex-row flex-col-reverse gap-y-5 gap-x-7">
                <div class="basis-1/3">
                    <nuxt-img class="rounded-sm " :src="`${baseUrl}${project.imageURL}`" />
                </div>
                <div class="basis-full flex flex-col gap-y-4">
                    <!-- role company & period -->
                    <div class="group flex items-center gap-x-2 group-hover:text-teal-500">
                        <p class="text-base font-medium">{{ project.title }}</p>
                        <Icon class="text-lg text-white group-hover:text-teal-500 group-hover:translate-x-2 group-hover:-translate-y-1 hover:scale-110 duration-300" name="ic:baseline-arrow-outward" />
                        
                    </div>
                    <!-- description -->
                    <p class="text-sm text-slate-400">{{ project.description }}</p>
                    <!-- chips -->
                    <div  class="flex gap-x-2 flex-wrap gap-y-2">
                        <p v-for="(skill, index) in project.chips" :key="index" class="px-3 bg-opacity-10 py-1 font-medium text-xs text-teal-400 bg-teal-500  rounded-full">
                        {{ skill.name }}
                        </p>
                    </div>
                </div>
        </div>
       </nuxt-link>
    </div>

    <!-- link to full resume -->
    <nuxt-link to="/archive">
        <div class="group flex items-center gap-x-2 my-4">
                <p class="text-base group-hover:underline underline-offset-1 text-gray-300 font-medium">View Full Project Archive</p>
            <Icon class="text-lg text-white group-hover:text-teal-500 group-hover:translate-x-2  hover:scale-110 duration-300" name="material-symbols:arrow-forward" />
        </div>
    </nuxt-link>



</template>
<script setup lang="ts">
import {Project} from '~/utils/types'

  // runtime fonfig for base url
  const runTimeConfig = useRuntimeConfig()
  const baseUrl =  runTimeConfig.public.appUrl

  // Fetch Experience
  const { data, pending, error, refresh } = await useFetch<Project>(`${baseUrl}/api/projects`, {})

</script>
<style lang="">
    
</style>