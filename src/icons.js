import Vue from "vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faTwitter, faYoutube, faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)
