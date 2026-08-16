(() => {
  const dialog = document.getElementById("screen-lightbox");

  if (!dialog) {
    return;
  }

  const lightboxImage = dialog.querySelector(".lightbox-image");
  const closeButton = dialog.querySelector(".lightbox-close");

  let activeTrigger = null;

  document.querySelectorAll(".screen-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const sourceImage = trigger.querySelector("img");

      if (!sourceImage || !lightboxImage) {
        return;
      }

      activeTrigger = trigger;

      lightboxImage.src = sourceImage.currentSrc || sourceImage.src;
      lightboxImage.alt = sourceImage.alt;

      dialog.showModal();
    });
  });

  closeButton?.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    activeTrigger?.focus();
    activeTrigger = null;
  });
})();
