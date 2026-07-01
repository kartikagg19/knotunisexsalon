import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Booking = {
  id: string;
  serviceId: string;
  serviceName: string;
  tierLabel: string;
  price: number;
  stylistId: string;
  stylistName: string;
  date: string; // ISO date
  time: string;
  createdAt: number;
};

type BookingContextValue = {
  bookings: Booking[];
  addBooking: (b: Omit<Booking, 'id' | 'createdAt'>) => Booking;
  cancelBooking: (id: string) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking: BookingContextValue['addBooking'] = (b) => {
    const newBooking: Booking = {
      ...b,
      id: `b_${Date.now()}`,
      createdAt: Date.now(),
    };
    setBookings((prev) => [newBooking, ...prev]);
    return newBooking;
  };

  const cancelBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookings() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBookings must be used within BookingProvider');
  return ctx;
}
