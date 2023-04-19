import { ref, readonly } from 'vue'

export const useGetCurTime = () => {
    const timeStr = ref('')
    const arr = readonly(['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'])
    const getZero = (t) => {
        return t < 10 ? '0' + t : t;
    }

    const getCurTime = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = getZero(date.getMonth() + 1);
        const dates = getZero(date.getDate());
        const day = date.getDay();
        const h = getZero(date.getHours());
        const m = getZero(date.getMinutes());
        const s = getZero(date.getSeconds());
        timeStr.value = `${year} 年 ${month} 月 ${dates} 日 ${arr[day]} ${h}：${m}：${s}`
    }
    getCurTime()
    setInterval(getCurTime, 1000)
    return {
        timeStr
    }
}