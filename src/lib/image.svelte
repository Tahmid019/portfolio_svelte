<script lang="ts">
  import { optimize } from '$lib/image';
  import type { Photo } from '$lib/types';
 
  export let photo: Photo;
  export let custom_class: String = '';
</script>
 
<img
  class={`absolute left-0 top-0 w-full h-full ${custom_classclass}`}
  srcset={optimize(photo.url)}
  alt={photo.description}
/>