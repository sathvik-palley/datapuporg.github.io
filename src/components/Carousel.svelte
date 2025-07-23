<script>
  let current = 0;
  const images = [
    '/images/Dark-QueryEditorwithAI.png',
    '/images/Dark-ConnectToDatabase.png',
    '/images/Dark-FilterResults.png',
    '/images/Dark-ExisitngConnections.png'
  ];

  // Automatically cycle images every 4 seconds
  const interval = setInterval(() => {
    current = (current + 1) % images.length;
  }, 5000);

  // Cleanup when component unmounts
  import { onDestroy } from 'svelte';
  onDestroy(() => clearInterval(interval));

  function next() {
    current = (current + 1) % images.length;
  }
  function prev() {
    current = (current - 1 + images.length) % images.length;
  }
</script>

<style>
  .carousel {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    margin: 2rem auto;
  }

  .carousel img {
    width: 950px;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: opacity 0.5s ease-in-out;
  }

  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.5);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 2;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    transition: background 0.2s, transform 0.2s;
  }
  .carousel-btn:hover {
    background: rgba(0,0,0,0.8);
    transform: translateY(-50%) scale(1.08);
  }
  .carousel-btn.prev {
    left: 1rem;
  }
  .carousel-btn.next {
    right: 1rem;
  }
</style>

<div class="carousel">
  <button class="carousel-btn prev" on:click={prev} aria-label="Previous image">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
  <img src={images[current]} alt="carousel image" />
  <button class="carousel-btn next" on:click={next} aria-label="Next image">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div>
