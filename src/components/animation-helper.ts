/**
 * Applies staggered animations to a container's children
 * @param containerSelector - The CSS selector for the container with children to animate
 * @param delayBetweenItems - Delay in ms between each child's animation
 * @param startDelay - Initial delay in ms before starting the animations
 */
export function initStaggeredAnimation(
  containerSelector: string,
  delayBetweenItems: number = 100,
  startDelay: number = 0
): void {
  document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll(containerSelector);
    
    containers.forEach(container => {
      const children = Array.from(container.children);
      
      children.forEach((child, index) => {
        // Set animation delay based on index
        const delay = startDelay + (index * delayBetweenItems);
        (child as HTMLElement).style.animationDelay = `${delay}ms`;
        
        // Add animation class after a small timeout to ensure styles are applied
        setTimeout(() => {
          child.classList.add('animate');
        }, 10);
      });
    });
  });
}

/**
 * Animates elements as they enter the viewport
 * @param selector - CSS selector for elements to animate
 * @param animationClass - CSS class to add when element is visible
 * @param threshold - How much of the element must be visible (0-1)
 */
export function initScrollAnimation(
  selector: string,
  animationClass: string = 'animate',
  threshold: number = 0.1
): void {
  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(selector);
    
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers that don't support IntersectionObserver
      elements.forEach(el => el.classList.add(animationClass));
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold }
    );
    
    elements.forEach(el => observer.observe(el));
  });
}

/**
 * Creates a typing animation effect for text
 * @param elementSelector - CSS selector for the element to animate
 * @param text - The text to type
 * @param typeSpeed - Speed of typing in ms
 * @param startDelay - Delay before typing starts
 */
export function createTypingAnimation(
  elementSelector: string,
  text: string,
  typeSpeed: number = 100,
  startDelay: number = 500
): void {
  document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector(elementSelector);
    if (!element) return;
    
    // Clear any existing content
    element.textContent = '';
    
    // Create a cursor element
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.textContent = '|';
    cursor.style.animation = 'blink 1s step-end infinite';
    element.appendChild(cursor);
    
    // Define keyframes for the cursor blink animation
    if (!document.querySelector('#cursor-blink-keyframes')) {
      const style = document.createElement('style');
      style.id = 'cursor-blink-keyframes';
      style.textContent = `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Start typing after the specified delay
    setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          // Insert the character before the cursor
          const char = document.createTextNode(text.charAt(i));
          element.insertBefore(char, cursor);
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, typeSpeed);
    }, startDelay);
  });
}
