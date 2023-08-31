<template>
    <!--  -->
    <div class="flex items-center gap-x-3 my-5">
        <p class=" text-teal-700 rounded font-mono">Skills</p>
        <div class="border-t border-gray-600 w-full"></div>
    </div>

    <!-- error -->
    <div v-if="error" class="flex flex-col gap-2 items-center">
        <Icon name="solar:server-minimalistic-broken" />
        <p class="font-mono text-3xl text-red-700">Something Went wrong Fetching Data</p>
        <p class="font-mono text-gray-500 text-center">{{ error }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aspernatur.</p>
        <button @click="refresh()" class="bg-teal-900 hover:bg-teal-950 w-fit px-4 py-1 rounded-md font-mono">
            <Icon v-if="pending" name="eos-icons:loading" />
            <p v-else>Try agian</p>
        </button>
    </div>

    <div v-else>
        <!-- progamming Languages -->
        <p class="font-mono text-xs text-gray-400">Programming Languages</p>
        <div class="flex flex-row justify-start gap-y-2  flex-wrap  w-full my-4">
            <div  v-for="(skill, index) in programmingLanguages" :key="index" class=" hover:bg-teal-200 hover:bg-opacity-5 mr-5 items-center justify-center py-2 px-2 rounded-md cursor-pointer flex flex-col gap-y-2">
                <Icon class="text-5xl" :name="skill.icon"/>
                <p class="font-mono text-xs">{{ skill.name }}</p>
            </div>
        </div>


        <!-- Libraries & Framewrokss -->
        <p class="font-mono text-xs text-gray-400">Libraries & Framewroks</p>
        <div class="flex flex-row justify-start gap-y-2 flex-wrap  w-full my-4">
            <div  v-for="(skill, index) in Libraries" :key="index" class=" hover:bg-teal-200 hover:bg-opacity-5 items-center mr-5 justify-center py-2 px-2 rounded-md cursor-pointer flex flex-col gap-y-2">
                <Icon class="text-5xl" :name="skill.icon"/>
                <p class="font-mono text-xs">{{ skill.name }}</p>
            </div>
        </div>

        <!-- Ux design -->
        <p class="font-mono text-xs text-gray-400">UX/UI Designs</p>
        <div class="flex flex-row justify- gap-y-2 flex-wrap  w-full my-4">
            <div  v-for="(skill, index) in ux_ui" :key="index" class=" hover:bg-teal-200 hover:bg-opacity-5 items-center mr-5 justify-center py-2 px-2 rounded-md cursor-pointer flex flex-col gap-y-2">
                <Icon class="text-5xl" :name="skill.icon"/>
                <p class="font-mono text-xs">{{ skill.name }}</p>
            </div>
        </div>


        <!-- Tools & Platforms -->
        <p class="font-mono text-xs text-gray-400">Tools & Platforms</p>
        <div class="flex flex-row justify-start gap-y-2 flex-wrap  w-full my-4">
            <div  v-for="(skill, index) in tools" :key="index" class=" hover:bg-teal-200 hover:bg-opacity-5 items-center mr-5 justify-center py-2 px-2 rounded-md cursor-pointer flex flex-col gap-y-2">
                <Icon class="text-5xl" :name="skill.icon"/>
                <p class="font-mono text-xs">{{ skill.name }}</p>
            </div>
        </div>

        
        <!-- database -->
        <p class="font-mono text-xs text-gray-400">Databases</p>
        <div class="flex flex-row justify-start gap-y-2 flex-wrap  w-full my-4">
            <div  v-for="(skill, index) in databases" :key="index" class=" hover:bg-teal-200 hover:bg-opacity-5 items-center mr-5 justify-center py-2 px-2 rounded-md cursor-pointer flex flex-col gap-y-2">
                <Icon class="text-5xl" :name="skill.icon"/>
                <p class="font-mono text-xs">{{ skill.name }}</p>
            </div>
        </div>
    </div>

    


</template>
<script setup lang="ts">
import {Skill} from '~/utils/types'




  // runtime fonfig for base url
  const runTimeConfig = useRuntimeConfig()
  const baseUrl =  runTimeConfig.public.appUrl

  const { data, pending, error, refresh } = await useFetch<Skill>(`${baseUrl}/api/skills`, {})

      // computed to fiter the programming languages
      const programmingLanguages = computed(() => {
            return data.value?.skills.filter(post =>
            post.category === 'languages')
        })

      // computed to fiter the Libraries & frameworks
      const Libraries = computed(() => {
            return data.value?.skills.filter(post =>
            post.category === 'libraries')
        })

      // computed to fiter the UX
      const ux_ui = computed(() => {
            return data.value?.skills.filter(post =>
            post.category === 'ui/ux')
        })

      // computed to fiter the tools
      const tools = computed(() => {
            return data.value?.skills.filter(post =>
            post.category === 'tools')
        })

          // computed to fiter the database
          const databases = computed(() => {
            return data.value?.skills.filter(post =>
            post.category.toString() === "database")
        })

</script>
<style lang="">


</style>