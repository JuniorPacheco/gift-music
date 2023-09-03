import Swal from "sweetalert2";

const alertCreatePlaylist = async () => {
  return await Swal.fire({
    html: "<b>¿Quieres crear una playlist para compartir?</b>",
    showCancelButton: true,
    color: "#fff",
    width: 400,
    background: "linear-gradient(98deg, #886AE2 43.66%, #A284F6 116.16%)",
    confirmButtonColor: "#A284F6",
    cancelButtonColor: "#A284F6",
    confirmButtonText: "Sí, crear cuenta",
    cancelButtonText: "No",
  });
};

export { alertCreatePlaylist };
