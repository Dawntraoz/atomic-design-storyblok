import Vue from 'vue'

/* Templates */
import Template from '~/components/Template.vue'

/* Organisms */
import Services from '~/components/organisms/Services.vue'
import Team from '~/components/organisms/Team.vue'

/* Molecules */
import HeadingSection from '~/components/molecules/HeadingSection.vue'
import ServiceCard from '~/components/molecules/ServiceCard.vue'
import MemberCard from '~/components/molecules/MemberCard.vue'

Vue.component('page-template', Template)
Vue.component('services', Services)
Vue.component('team', Team)
Vue.component('heading-section', HeadingSection)
Vue.component('service-card', ServiceCard)
Vue.component('member-card', MemberCard)
