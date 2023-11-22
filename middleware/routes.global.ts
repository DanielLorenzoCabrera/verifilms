
export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore();
  const { isLoggedIn } = storeToRefs(store);
  const accessToMediaWithoutLoggin: Boolean =
    to.name === "media" && !isLoggedIn.value;
  const authViews: Array<string> = ["/login", "/register", "/"];
  const accessAuthViewWhenLogged: Boolean =
    isLoggedIn.value && authViews.includes(to.path);
  if (accessToMediaWithoutLoggin) return navigateTo({ name: "login" });
  if (accessAuthViewWhenLogged) return navigateTo({ name: "media" });
});
