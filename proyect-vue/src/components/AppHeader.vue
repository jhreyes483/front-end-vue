<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div>
                    <img class="avatar_mask" alt="Vue logo" src="../assets/logo.png">
                </div>
                <b> Curso</b> Vue
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <ul class="navbar-nav navbar-right mr-auto">
                        <li class="nav-item">
                            <router-link active-class="active" to="/home" class="nav-link">inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link active-class="active" to="/blog" class="nav-link">Blog </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link active-class="active" to="/formulario" class="nav-link">Formulario </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link active-class="active" to="/pagina" class="nav-link">Pagina 1</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link active-class="active" to="/mi-componente" class="nav-link">Pagina 2</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link active-class="active" to="/peliculas" class="nav-link">Peliculas</router-link>
                        </li>
                        <!-- 
                        <li class="nav-item">
                            <div class="avatar_mask">
                                <div class="avatar_mask">
                                    <img src="" class="w-100">
                                </div>
                                <div class="avatar_mask">
                                    <img class="w-100">
                                </div>
                            </div>
                        </li>
                         -->

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item">Panel de usuarios</a></li>
                                <li><a class="dropdown-item" href="#">Mi perfil</a></li>
                                <li><a class="dropdown-item">Ajustes</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item pointer">Cerrar sesión</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>

    <!-- 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>


     -->
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>