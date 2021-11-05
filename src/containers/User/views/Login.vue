<template lang="pug">
.min-h-screen.flex.items-center.justify-center.bg-gray-50.py-12.px-4(class="sm:px-6 lg:px-8")
  .max-w-md.w-full.space-y-8
    div
      img.mx-auto.h-12.w-auto(src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow")
      h2.mt-6.text-center.text-3xl.font-extrabold.text-gray-900
        | Sign in to your account  
      p.mt-2.text-center.text-sm.text-gray-600
        | Or
        | {{ ' ' }}
        a.font-medium.text-indigo-600(href="#" class="hover:text-indigo-500")
          | start your 14-day free trial
    div.mt-8.space-y-6
      input(type="hidden" name="remember" value="true")
      .rounded-md.shadow-sm.-space-y-px
        div
          label.sr-only(for="email-address") Email address
          input#email-address.appearance-none.rounded-none.relative.block.w-full.px-3.py-2.border.border-gray-300.placeholder-gray-500.text-gray-900.rounded-t-md(v-model="email" name="email" type="email" autocomplete="email" class="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address")
        div
          label.sr-only(for="password") Password
          input#password.appearance-none.rounded-none.relative.block.w-full.px-3.py-2.border.border-gray-300.placeholder-gray-500.text-gray-900.rounded-b-md(v-model="password" name="password" type="password" autocomplete="current-password" class="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password")
      .flex.items-center.justify-between
        .flex.items-center
          input#remember-me.h-4.w-4.text-indigo-600.border-gray-300.rounded(name="remember-me" type="checkbox" class="focus:ring-indigo-500")
          label.ml-2.block.text-sm.text-gray-900(for="remember-me")
            | Remember me
        .text-sm
          a.font-medium.text-indigo-600(href="#" class="hover:text-indigo-500")
            | Forgot your password?
      div
        button.group.relative.w-full.flex.justify-center.py-2.px-4.border.border-transparent.text-sm.font-medium.rounded-md.text-white.bg-indigo-600(type="submit" @click="login(email, password)" class="hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
          span.absolute.left-0.inset-y-0.flex.items-center.pl-3
            LockClosedIcon.h-5.w-5.text-indigo-500(class="group-hover:text-indigo-400" aria-hidden="true")
          |             Sign in
</template>

<script setup> 
    import login from '../api/login' 
    import { ref } from 'vue'

    

    const email = ref()
    const password = ref()
</script>