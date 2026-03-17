
import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DemoForm from '@/components/DemoForm';
import { useTranslation } from 'react-i18next';

const ConsultationCTA: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-staydia-darkgray/50 border border-staydia-gold/20 rounded-xl p-8 text-center max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">{t('forClubs.readyToTransform')}</h3>
      <p className="text-gray-300 mb-6">{t('forClubs.readyToTransformDesc')}</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-staydia-gold text-staydia-black hover:bg-opacity-90 font-medium px-8 py-6 text-lg">{t('forClubs.bookConsultation')}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">{t('forClubs.bookConsultationDialog')}</DialogTitle>
          </DialogHeader>
          <DemoForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ConsultationCTA;
