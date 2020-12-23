<template>
  <div>
      <h3 class="mb-4">Today remote job</h3>
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul>
          <li v-for="(job, index) in jobsArray" :key="index">
            <router-link to="/add"  class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                   {{job.name}}
                  </div>
                  <div class="ml-2 flex-shrink-0 flex">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {{job.duration | capitalize}}
                    </span>
                  </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                    <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                    </svg>
                    <span>
                      Closing on
                      <time datetime="2020-01-07">{{job.date | getFormatDate}}</time>
                    </span>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
         
        </ul>
      </div>
</div>
</template>

<script>
import moment from 'moment'
export default {
   filters: {
    capitalize(string) {
        return string = string.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    },
     getFormatDate(string) {
                return moment(string).format('DD MMMM YYYY');
        }
    },
    props: {
        jobsArray: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>