<template>
<div>
    <div class="recent-events">
    <div class='news-header'>Recent Events</div>
        <ul>
            <li v-for="recent in recents" class='news-text'>
                {{ recent.date}}
                <div>
                    {{recent.description}}
                </div>
            </li>
        </ul>
    </div>
    <div class="upcoming-events">
    <div class='news-header'>Upcoming Events</div>
    <ul>
        <li v-for="future in futures" class='news-text'>
            {{future.date}}
            <div>
                {{future.description}}
            </div>
        </li>
    </ul>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      recents: [
          {date: 'March', description: 'Thanks to those who helped install a wheelchair ramp and grab bars for an elderly man in Reston who is recovering from a stroke. We also installed grab bars in a bathroom.'},
          {date: 'March-April', description: 'Thanks to those who assisted in our recent large project in Springfield! We widened two doorways, installed a wheelchair ramp, repaired lighting, installed grab bars in a bathroom, removed a shower door and painted the bedroom and bathroom.'},
      ],
      futures: [
          {date: '', description: 'We are looking for volunteers for the following projects. The work will be scheduled based on availability of volunteers.'},
          {date: '', description: 'Installation of a stair handrail for a disabled man in Ashburn, VA. No specific skills are required.'},
          {date: '', description: 'Installation of a wheelchair lift for a disabled man in Manassas Park. We will have to move the lift from Springfield to Manassas Park, remove a short set of wooden stairs in the garage, then install the lift. No specific skills are required.'},
          {date: '', description: 'Widening of a bathroom doorway and remodeling of a shower for a disabled woman in Centreville, VA. This project will likely involve some framing, drywall repair and painting.'},
          {date: '', description: 'Did you know? Many of our referrals come from other non-profit organizations, occupational therapists and social services. We recently received a number of requests from family members who attended a local ALS support group meeting. Some of the projects listed above resulted from those inquiries.'},
          {date: '', description: 'If you any questions or comments, please call Steve at 571-253-7124, email vrhvolunteers@gmail.com.'}
      ]
    };
  },
};
</script>

<style scoped>
.news-text{
    font-size: 24px;
    margin: 5px;
    margin-left: 25px;
}

.news-header{
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin-top: 25px;
}
</style>