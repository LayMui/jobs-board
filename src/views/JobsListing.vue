<template>
     <list-of-jobs :jobsArray="jobs" ></list-of-jobs>
</template>

<script>
// @ is an alias to /src

import ListOfJobs from '@/components/ListOfJobs'
import { jobsData } from "@/data/job"
export default {
  name: 'JobsListing', //for debugging purpose // can cause max callstack issue
  data() {
      return {
        jobs: [],
       
      }
  },
  components: {
      ListOfJobs
  },
  mounted() {
    console.log(jobsData)
    this.jobs = jobsData

    if(!localStorage.getItem('jobs')){
      this.loadInitialData()
    }
    this.jobs = JSON.parse(localStorage.getItem('jobs'))
    console.log(this.jobs)
  },
  methods: {
    loadInitialData() {
      console.log('load initial data')
      localStorage.setItem('jobs', JSON.stringify(jobsData))
    },
    fetchData() {
      localStorage.setItem('jobs', JSON.stringify(jobsData))
    }
  }
}
</script>
