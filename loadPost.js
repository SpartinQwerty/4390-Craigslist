document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".post-form");
  const submitBtn = document.querySelector(".submit-btn");
  const formStatus = document.getElementById("form-status");

  const fields = {
    title: document.getElementById("title"),
    category: document.getElementById("category"),
    price: document.getElementById("price"),
    location: document.getElementById("location"),
    description: document.getElementById("description"),
  };

  const validators = {
    title(value) {
      const trimmed = value.trim();
      if (!trimmed) return "Enter a title for your post.";
      if (trimmed.length < 5) return "Title must be at least 5 characters long.";
      return "Title looks good.";
    },
    category(value) {
      if (!value) return "Choose a category so buyers know where to find your post.";
      return "Category selected.";
    },
    price(value) {
      const trimmed = value.trim();
      if (!trimmed) return "Enter a price, even if the item is free.";
      const normalized = trimmed.replace(/[$,\s]/g, "");
      if (!/^\d+(\.\d{1,2})?$/.test(normalized)) {
        return "Enter a valid price like 25 or 25.00.";
      }
      if (Number(normalized) < 0) return "Price cannot be negative.";
      return "Price looks valid.";
    },
    location(value) {
      const trimmed = value.trim();
      if (!trimmed) return "Enter a city or neighborhood for pickup.";
      if (trimmed.length < 2) return "Location must be at least 2 characters.";
      return "Location looks good.";
    },
    description(value) {
      const trimmed = value.trim();
      if (!trimmed) return "Add a short description so buyers know what you are selling.";
      if (trimmed.length < 15) return "Description must be at least 15 characters long.";
      return "Description looks good.";
    },
  };

  function getFeedbackEl(fieldName) {
    return document.getElementById(`${fieldName}-feedback`);
  }

  function setFieldState(field, state, message) {
    const feedback = getFeedbackEl(field.id);
    field.classList.remove("is-error", "is-success");
    feedback.classList.remove("feedback-error", "feedback-success");

    if (!message) {
      feedback.textContent = "";
      return;
    }

    if (state === "error") {
      field.classList.add("is-error");
      feedback.classList.add("feedback-error");
    }

    if (state === "success") {
      field.classList.add("is-success");
      feedback.classList.add("feedback-success");
    }

    feedback.textContent = message;
  }

  function validateField(fieldName, showSuccess = true) {
    const field = fields[fieldName];
    const message = validators[fieldName](field.value);
    const isValid = message.toLowerCase().includes("looks good") || message.toLowerCase().includes("selected") || message.toLowerCase().includes("valid");

    if (isValid) {
      setFieldState(field, showSuccess ? "success" : "", showSuccess ? message : "");
      return true;
    }

    setFieldState(field, "error", message);
    return false;
  }

  Object.keys(fields).forEach((fieldName) => {
    const field = fields[fieldName];

    field.addEventListener("input", function () {
      validateField(fieldName, true);
      formStatus.textContent = "";
      formStatus.className = "form-status";
    });

    field.addEventListener("blur", function () {
      validateField(fieldName, true);
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const allValid = Object.keys(fields).every((fieldName) => validateField(fieldName, true));

    if (!allValid) {
      formStatus.textContent = "Please fix the highlighted fields before posting your listing.";
      formStatus.className = "form-status form-status-error";
      return;
    }

    submitBtn.classList.add("btn-loading");
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Posting...";

    setTimeout(function () {
      submitBtn.classList.remove("btn-loading");
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      formStatus.textContent = "✓ Post created successfully! Redirecting...";
      formStatus.className = "form-status form-status-success";
      form.reset();

      Object.values(fields).forEach((field) => {
        field.classList.remove("is-error", "is-success");
      });
      document.querySelectorAll(".field-feedback").forEach((feedback) => {
        feedback.textContent = "";
        feedback.classList.remove("feedback-error", "feedback-success");
      });

      setTimeout(function () {
        window.location.href = "index.html";
      }, 2000);
    }, 1200);
  });
});
