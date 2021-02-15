import { useContext, useEffect } from 'react'
import NProgress from 'nprogress'

import { Context } from '../context'

export const Loading = () => {
  const { isFetching } = useContext(Context)

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
    })

    return () => NProgress.remove()
  }, [])

  useEffect(() => {
    if (isFetching) NProgress.start()
    else NProgress.done()
  }, [isFetching])

  return null
}
