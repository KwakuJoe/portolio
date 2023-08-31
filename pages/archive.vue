<template>
    <div class="h-screen overflow-y-auto px-3" style="background: radial-gradient(circle, rgba(54, 146, 121, 0.15),
     rgba(10, 25, 65, 0.15)), linear-gradient(to bottom right, rgba(10, 25, 65, 0.15), rgba(10, 25, 65, 0.15));">
        <UContainer>
            <!--link back  -->
            <nuxt-link to="/">
                <div class="group flex items-center gap-x-2 lg:mt-20 md:mt-16 mt-10">
                    <Icon class="text-lg text-white group-hover:text-teal-500 group-hover:translate-x-2  hover:scale-110 duration-300" name="ic:baseline-arrow-back" />
                    <p class="text-base group-hover:underline underline-offset-1 text-teal-300 font-medium">Joseph .K. Ampah</p>
                </div>
            </nuxt-link>

            <!-- text -->
            <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
            <!-- Title  -->


            <!-- table -->
            <div class="relative overflow-x-auto mt-10">
                <table class="w-full text-sm text-left ">
                    <thead class="text-xs text-white border-b border-0.5 border-teal-900 uppercase">
                        <tr>
                            <th scope="col" class="px-6 py-3 md:table-cell lg:table-cell">
                                YEAR
                            </th>
                            <th scope="col" class="px-6 py-3  md:table-cell lg:table-cell">
                                PROJECT
                            </th>
                            <th scope="col" class="px-6 py-3 hidden lg:table-cell">
                                BUILT WITH
                            </th>
                            <th scope="col" class="px-6 py-3  hidden md:table-cell lg:table-cell">
                                LINK
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(project, index) in data?.projects" class="hover:bg-teal-200 hover:bg-opacity-5">
                            <td scope="row" class="md:table-cell lg:table-cell px-6 py-4 font-light  text-gray-400">
                                {{ project.year }}
                            </td>
                            <td class=" md:table-cell lg:table-cell px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               <nuxt-link :to="project.url">
                                    <div class="group flex items-center gap-x-2">
                                        <p class="">{{ project.title }}</p>
                                        <div class="md:hidden sm:block">
                                            <Icon class=" hidden text-lg text-white group-hover:text-teal-500 group-hover:translate-x-2  hover:scale-110 duration-300" name="ic:baseline-arrow-forward" />
                                        </div>
                                    </div>
                                </nuxt-link>
                               
                            </td>
                            <td class="hidden lg:table-cell px-6 py-4">
                                <div  class="flex gap-x-2 flex-wrap gap-y-2">
                                    <p v-for="skill in project.chips" class="px-3 bg-opacity-10 py-1 font-medium text-xs text-teal-400 bg-teal-500 w-fit rounded-full">{{ skill.name }}</p>                  
                                </div>
                            </td>
                            <td class="hidden md:table-cell lg:table-cell px-6 py-4">
                                <nuxt-link :to="project.url">
                                    <div class="group flex items-center gap-x-2">
                                        <p class="text-sm group-hover:underline underline-offset-1 text-gray-40 font-medium">{{project.url}}</p>
                                        <Icon class="text-lg text-white group-hover:text-teal-500 group-hover:translate-x-2  hover:scale-110 duration-300" name="ic:baseline-arrow-forward" />
                                    </div>
                                </nuxt-link>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </UContainer>
        </div>
</template>
<script setup lang="ts">
import { Project } from '~/utils/types';
 // runtime fonfig for base url
  const runTimeConfig = useRuntimeConfig()
  const baseUrl =  runTimeConfig.public.appUrl

  // Fetch Experience
  const { data, pending, error, refresh } = await useFetch<Project>(`${baseUrl}/api/projects`, {})

</script>
<style>
    
</style>