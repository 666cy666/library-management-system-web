import axios from "axios";

import nProgress from 'nprogress';
import 'nprogress/nprogress.css'

const request = axios.create({
    baseURL: 'http://localhost'
})

request.interceptors.request((config) => {
    nProgress.start()
    return config;
})

request.interceptors.response((res) => {
    nProgress.done()
    return res.data
}, (err) => {
    return err
})