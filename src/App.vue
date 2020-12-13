<template>
    <div id="app" class="bg-gray-100 h-full">
    <div class="max-w-xl mx-auto py-16">

      <div class="bg-white rounded shadow px-4 py-5 border-b border-gray-200 sm:px-6 mb-8">
        <h3 class="text-lg leading-6 font-medium text-gray-900 mb-3">
          Add new Job
        </h3>

        <live-preview :jobProp="job"></live-preview>

        <div class="mt-1 text-sm leading-5 text-gray-500 py-2">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">Name</label>
          <input type="text" name="name" data-qa="jobName" v-model="job.name" class="appearance-none block w-full bg-white text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"/>
        </div>

        <div class="mt-1 text-sm leading-5 text-gray-500 py-2">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">Duration</label>
          <input type="text" name="name" data-qa="jobDuration" v-model="job.duration" class="appearance-none block w-full bg-white text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"/>
        </div>

        <div class="mt-1 text-sm leading-5 text-gray-500 py-2">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">Date</label>
          <input type="date" name="name" data-qa="jobDate" v-model="job.date" class="appearance-none block w-full bg-white text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"/>
        </div>

        <button @click="submitJob" data-qa="jobSubmit" class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-xs">
          Submit
        </button>
      </div>

  <list-of-jobs :jobsArray="jobs" ></list-of-jobs>

    </div>

  </div>
  
</template>

<script>
import ListOfJobs from './components/ListOfJobs.vue'
import LivePreview from './components/LivePreview.vue'


export default {
  name: 'App',
  data() {
    return {
      job: {
        name: "Frontend developer",
        duration: "Part time",
        date: "December 25, 2020"
      },

      jobs: []
    }
  },
  components: {
    LivePreview,
    ListOfJobs
  },
  methods: {

      submitJob() {
      console.log(this.job)
      this.jobs.push(this.job);
    }
  }
 
}
</script>

<style>
#app {
  
}
</style>
