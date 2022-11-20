window.onload = (event) => {
  let miAlerta = document.querySelector('.toast');
  let bsAlerta = new bootstrap.Toast(miAlerta);
  bsAlerta.show();
}