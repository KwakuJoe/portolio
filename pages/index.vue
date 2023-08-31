<template>
<div class="flex justify-center items-center " style="background: radial-gradient(circle, rgba(54, 146, 121, 0.15),
 rgba(10, 25, 65, 0.15)), linear-gradient(to bottom right, rgba(10, 25, 65, 0.15), rgba(10, 25, 65, 0.15));">
    <UContainer>
    <div class="flex flex-col lg:flex-row gap-x-14">
      <!-- Left Side -->
      <LeftPanel>
        <ul class="mt-16 w-max">
            <!-- bio -->
            <li>
              <a @click.prevent="scrollToBio()" class="group cursor-pointer flex items-center py-3 active" >
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                </span>
                <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">bio
                </span>
             </a>
            </li>
            <!-- skills -->
            <li>
              <a @click.prevent="scrollToSkills()" class="group cursor-pointer flex items-center py-3 active" >
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                </span>
                <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">skills
                </span>
             </a>
            </li>
            <!-- experience -->
            <li>
              <a @click.prevent="scrollToExperience()" class="group cursor-pointer flex items-center py-3 active" >
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                </span>
                <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience
                </span>
             </a>
            </li>
            <!-- PROJECTS -->
            <li>
              <a @click.prevent="scrollToProject()"  class="group cursor-pointer flex items-center py-3 active" >
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                </span>
                <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects
                </span>
             </a>
            </li>
          </ul>
      </LeftPanel>

      <!-- right side --> 
      <div class="flex flex-col  lg:w-1/2 h-full py-10 px-2 gap-y-20  overflow-auto  lg:py-16 pr-1">
        <section ref="bio">
            <Bio/>
        </section>

        <!-- Skills -->
        <section ref="skills">
            <Skills />
        </section>

        <!-- Experience -->
        <section ref="experience" >
          <Experiences/>
        </section>

        
        <!-- Experience -->
        <section ref="projects">
         <Projects/>
        </section>

      </div>


    </div>
  </UContainer>
</div>
</template>

<script setup lang="ts">
import {Experience} from '~/utils/types'

const links = reactive([
    {
      name:'ABOUT',
      Path:'#about'
    },
    {
      name:'SKILLS',
      Path:'#experience'
    },
    {
      name:'EXPERIENCEE',
      Path:'#experience'
    },
    {
      name:'PROJECTS',
      Path:'#projects'
    },
  ])

  // click to scroll
  // project

const bio = ref();
const scrollToBio = () => {
      bio.value.scrollIntoView({
        behavior: 'smooth', // Use smooth scrolling animation
        block: 'start', // Scroll to the top of the section
      });
    };

const experience = ref();
const scrollToExperience = () => {
      experience.value.scrollIntoView({
        behavior: 'smooth', // Use smooth scrolling animation
        block: 'start', // Scroll to the top of the section
      });
    };

const projects = ref();
const scrollToProject = () => {
      projects.value.scrollIntoView({
        behavior: 'smooth', // Use smooth scrolling animation
        block: 'start', // Scroll to the top of the section
      });
    };

const skills = ref();
const scrollToSkills = () => {
      skills.value.scrollIntoView({
        behavior: 'smooth', // Use smooth scrolling animation
        block: 'start', // Scroll to the top of the section
      });
    };

</script>

<style></style>
