import { getActivePinia } from 'pinia'

export function resetStores() {
    const pinia = getActivePinia()
    if (pinia) {
        Object.keys(pinia.state.value).forEach(storeId => {
            const store = pinia._s.get(storeId) // Access store instances
            if (store.$reset) {
                store.$reset()
            }
        })
    }
}