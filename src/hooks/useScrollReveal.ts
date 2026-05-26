import { useEffect, useRef } from 'react'

/**
 * Custom hook untuk animasi scroll reveal menggunakan IntersectionObserver.
 * Menambahkan class 'visible' pada elemen saat masuk viewport.
 */
export function useScrollReveal(): void {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Setelah terlihat, hentikan observasi untuk performa
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    elements.forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])
}

/**
 * Hook untuk mendeteksi apakah jam operasional toko saat ini buka atau tutup.
 * Jam buka: 08.00 - 22.00 WIB
 */
export function useStoreStatus(): { isOpen: boolean; statusText: string; nextStatus: string } {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const currentMinutes = hours * 60 + minutes

  const openMinutes = 8 * 60   // 08:00
  const closeMinutes = 22 * 60 // 22:00

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes

  if (isOpen) {
    const remainingMinutes = closeMinutes - currentMinutes
    const remainingHours = Math.floor(remainingMinutes / 60)
    const remainingMins = remainingMinutes % 60
    return {
      isOpen: true,
      statusText: 'Buka Sekarang',
      nextStatus: `Tutup dalam ${remainingHours > 0 ? `${remainingHours} jam ` : ''}${remainingMins} menit`,
    }
  } else {
    return {
      isOpen: false,
      statusText: 'Tutup',
      nextStatus: 'Buka kembali pukul 08.00 WIB',
    }
  }
}
