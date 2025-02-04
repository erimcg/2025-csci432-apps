<script setup>



</script>


<template>
    <div class="menu">
        <ul>
            <li>
                <RouterLink to="/">
                    <div class="flex align-center">
                        <img src="../assets/icons/home_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" class="icon"></img>
                        <span class="menu-item">Home</span>
                    </div>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/settings">
                    <div class="flex align-center">
                        <img src="../assets/icons/settings_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" class="icon"></img>
                        <span class="menu-item">Settings</span>
                    </div>
                </RouterLink>
            </li>
        </ul>
    </div>

</template>

<style scoped>

</style>