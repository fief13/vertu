import Swal from "sweetalert2";

export const errorMessage = (message) => {
  Swal.fire({
    icon: "warning",
    title: message,
    confirmButtonColor: "#000",
    iconColor: "#181822",
  });
};

export const successMessage = (message) => {
  Swal.fire({
    icon: "success",
    title: message,
    confirmButtonColor: "#000",
    iconColor: "#008000",
  });
};
