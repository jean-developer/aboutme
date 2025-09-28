export const fadeIn = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1]
    }
  }
};

export const slideUp = {
  hidden: {opacity: 0, y: 40},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const stagger = (staggerChildren = 0.16, delayChildren = 0.08) => ({
  hidden: {},
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren,
      delayChildren
    }
  }
});

export const defaultViewport = {once: true, amount: 0.25};
