<template>
      <div class="bg-white rounded shadow px-4 py-5 border-b border-gray-200 sm:px-6 mb-8">
        <h3 class="text-lg leading-6 font-medium text-gray-900 mb-3">
          Add new job
        </h3>
        <live-preview :jobProp="job"></live-preview>

        <div class="mt-1 text-sm leading-5 text-gray-500 py-2">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">Name</label>
          <input placeholder="Frontend Developer" type="text" name="name" data-qa="jobName" v-model.lazy="$v.job.name.$model" class="appearance-none block w-full bg-white text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"/>
        </div>
          <p class="error" v-if="!$v.job.name.required">This field is required</p>
          <p class="error" v-if="!$v.job.name.minLength">Field must have at least {{ $v.job.name.$params.minLength.min }} characters.</p>
     

        <div class="mt-1 text-sm leading-5 text-gray-500 py-2">
         <label class="block mb-4">
          <span class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">Duration</span>
          <select v-model="job.duration" data-qa="jobDuration" class="bg-gray-100 p-3 block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option data-qa="partTime" value="part-time">Part Time</option>
            <option data-qa="fullTime" value="full-time">Full Time</option>
            <option data-qa="freelance" value="freelance">Freelance</option>
            <option data-qa="contract" value="contract">Contract</option>
          </select>
      </label>
  </div>

        <div class="mt-1 text-sm leading-5 text-gray-500 py-2">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">Date</label>
          <input type="date" name="name" data-qa="jobDate" v-model="job.date" class="appearance-none block w-full bg-white text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"/>
        </div>
       
          <button :disabled="!job.name" @click="submitJob" data-qa="jobSubmit" class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-xs">
          Submit
        </button>
        </div>
      
</template>

<script>
// @ is an alias to /src

import LivePreview from '@/components/LivePreview'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'AddJob', //for debugging purpose
  data() {
      return {
        job: {
          name: "",
          duration: "",
          date: "",
        
        }
      }
  },
  validations: { // validations object to mirror our data
  // in the template, we'll use that computed property $model in the validations object
    job: {
      name: {
        required,
        minLength: minLength(4) //key-value pair 
      }
    }
  },
  components: {
      LivePreview
  },
  methods: {
    submitJob() {
       
        // 1. Get all the job from local storage
        // 2. Add the new job inside it
        // 3. Store it back inside the local storage
        let jobsArray = JSON.parse(localStorage.getItem('jobs'))

        this.job.id = jobsArray.length

        jobsArray.push(this.job)
        localStorage.setItem('jobs', JSON.stringify(jobsArray))
        // Redirect to the list of jobs view
        this.$router.push("/");
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
  font-size: 8pt;
}
button:disabled {
    opacity: 0.8;
} 
</style>