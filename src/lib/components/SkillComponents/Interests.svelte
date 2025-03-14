  <script lang="ts">
    import cp_bg from "$lib/assets/cp.jpeg";
    import anime_bg from "$lib/assets/onepiece.jpeg";
    import web_bg from "$lib/assets/web.jpeg";
    import ml_bg from "$lib/assets/ml.jpeg";

    import LayoutGrid from "$lib/components/ui/Layout/LayoutGrid.svelte";
    import SkeletonFour from "$lib/components/InterestComponents/Skeleton.svelte";
    import SkeletonOne from "$lib/components/InterestComponents/Skeleton.svelte";
    import SkeletonThree from "$lib/components/InterestComponents/Skeleton.svelte";
    import SkeletonTwo from "$lib/components/InterestComponents/Skeleton.svelte";
    let cards = [
      {
        id: 1,
        content: SkeletonOne,
        props:{
            Interest: "Web Development",
            Description: "I love to build websites and web applications. I have experience in building websites using HTML, CSS, JavaScript, React, and Svelte."
        },
        class: "md:col-span-2",
        thumbnail:
          web_bg,
      },
      {
        id: 2,
        content: SkeletonTwo,
        props:{
            Interest: "Machine Learning",
            Description: "I have experience in building machine learning models using Python and libraries like TensorFlow, Keras, and Scikit-learn."
        },
        class: "col-span-1",
        thumbnail:
          ml_bg,
      },
      {
        id: 3,
        content: SkeletonThree,
        props:{
            Interest: "Competetive Programming",
            Description: "Improving my skills and regularly solving problems on platforms like Codeforces and Leetcode."
        },
        class: "col-span-1",
        thumbnail:
          cp_bg,
      },
      {
        id: 4,
        content: SkeletonFour,
        props:{
            Interest: "Anime & Manga",
            Description: "I love watching anime and reading manga. Some of my favorite anime are Naruto, Attack on Titan, and One Piece. JOJO IS THE BEST !!!"
        },
        class: "md:col-span-2",
        thumbnail:
          anime_bg,
      },
    ];
  </script>
  
  <div class='flex justify-center items-center h-[550px] w-full md:h-[40rem] md:w-full '>
    <LayoutGrid {cards} />
  </div>
  