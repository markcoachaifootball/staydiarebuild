
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DemoForm from '@/components/DemoForm';
import { useTranslation } from 'react-i18next';

const RevenueCTA = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <section className="py-16 staydia-container text-center">
        <h2 className="text-3xl font-bold mb-4">{t('revenueSharing.ctaTitle')}</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">{t('revenueSharing.ctaDesc')}</p>
        <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg" onClick={() => setIsDialogOpen(true)}>{t('revenueSharing.bookCall')}</Button>
      </section>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">{t('revenueSharing.bookConsultation')}</DialogTitle>
          </DialogHeader>
          <DemoForm />
        </DialogContent>
      </Dialog>
    </>
  );
};
export default RevenueCTA;
