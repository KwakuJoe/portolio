<template>
    <!--  -->
    <div class="flex items-center gap-x-3 my-5">
        <p class=" text-teal-700 rounded font-mono">Experience</p>
        <div class="border-t border-gray-600 w-full"></div>
    </div>


    <div v-if="error" class="flex flex-col gap-2 items-center">
        <Icon name="solar:server-minimalistic-broken" />
        <p class="font-mono text-3xl text-red-700">Something Went wrong Fetching Data</p>
        <p class="font-mono text-gray-500 text-center">{{ error }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aspernatur.</p>
        <button @click="emit('refresh')" class="bg-teal-900 hover:bg-teal-950 w-fit px-4 py-1 rounded-md font-mono">
            <Icon v-if="pending" name="eos-icons:loading" />
            <p v-else>Try agian</p>
        </button>
    </div>
    

    <div v-for="experience in data?.experiences" class="group mb-10 lg:p-5 p-3 rounded-md hover:bg-teal-200 hover:bg-opacity-5 cursor-pointer">
       <div class="flex lg:flex-row flex-col gap-x-7">

            <div class="basis-1/3">
                <p class="text-xs font-medium text-slate-300 mt-1 lg:mb-0  group-hover:text-white">{{ experience.dateRange }}</p>
            </div>

            <div class="flex flex-col gap-y-4 basis-full">
                <!-- role company & period -->
                <div class="group flex items-center gap-x-2 group-hover:text-teal-500">
                    <p class="text-base font-medium">{{ experience.role }}</p>
                    <div class="h-1 w-1 rounded-full bg-white group-hover:bg-teal-500"></div>
                    <p class="text-base font-medium">{{ experience.organization }}</p>
                    <!-- <div class="h-1 w-1 rounded-full bg-white group-hover:bg-teal-500"></div> -->
                    <!-- <p class=" text-xs">{{ experience.location }}</p> -->
                    <Icon class="text-lg text-white group-hover:text-teal-500 group-hover:translate-x-2 group-hover:-translate-y-1 hover:scale-110 duration-300" name="ic:baseline-arrow-outward" />
                </div>
                <!-- description -->
                <p class="text-base text-slate-400">{{ experience.description }}</p>
                <!-- chips -->
                <div  class="flex gap-x-2 flex-wrap gap-y-2">
                    <p v-for="(skill, index) in experience.chips" :key="index" class="px-3 bg-opacity-10 py-1 font-medium text-xs text-teal-400 bg-teal-500  rounded-full">
                    {{ skill.name }}
                    </p>
                </div>
            </div>
       </div>
    </div>

    <!-- link to full resume -->
    <button @click="openPdfInNewTab" class="group flex items-center gap-x-2 my-4">
        <p class="text-base group-hover:underline underline-offset-1 text-gray-300 font-medium">View Full Résumé</p>
        <Icon class="text-lg text-white group-hover:text-teal-500 group-hover:translate-x-2  hover:scale-110 duration-300" name="material-symbols:arrow-forward" />
    </button>

    <!-- <a href="~"></a> -->


</template>
<script setup lang="ts">
import {Experience} from '~/utils/types'

// props
// const props = defineProps<{
//   data: Experience,
//   error:any,
//   pending:Boolean,
// }>()

  // runtime fonfig for base url
  const runTimeConfig = useRuntimeConfig()
  const baseUrl =  runTimeConfig.public.appUrl

  // Fetch Experience
  const { data, pending, error, refresh } = await useFetch<Experience>(`${baseUrl}/api/experience`, {})

  // open pdf in new tab
  function openPdfInNewTab() {
      window.open(`${baseUrl}/pdf/portfolio.pdf`, '_blank');
  }
// emit 
const emit = defineEmits(['refresh'])
</script>
<style lang="">


</style>