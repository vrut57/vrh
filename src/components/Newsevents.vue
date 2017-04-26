<template>
<div>
    <div class="upcoming-events">
    <ul>
            <li v-for="future in futures">
                {{future.date}}
                <div>
                    {{future.description}}
                </div>
            </li>
        </ul>
    </div>

    <div class="recent-events">
        <ul>
            <li v-for="recent in recents">
                {{ recent.date}}
                <div>
                    {{recent.description}}
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
          {date: 'monday', description: 'this was a monday'},
          {date: 'tuesday', description: 'this was a tuesday'},
          {date: 'wednesday', description: 'this was a wednesday'}
      ],
      futures: [
          {date: 'future', description: 'this was a future'},
          {date: 'future', description: 'this was a future'},
          {date: 'future', description: 'this was a future'}
      ]
    };
  },
};
</script>