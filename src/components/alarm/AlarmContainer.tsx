import {AlarmItem} from '@/components/alarm/AlarmItem';
import {ROUTES} from '@/constants/routes';
import {useReadAlert, useUnreadAlerts} from '@/hooks/queries/useAlert';
import {formatAlarmDate} from '@/utils/formatKoreanDate';
import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/navigation';

export const AlarmContainer = () => {
  const router = useRouter();
  const {data, isLoading} = useUnreadAlerts();
  const {mutate: deleteAlert} = useReadAlert();

  const handleDelete = (alertId: number) => {
    deleteAlert(alertId);
  };

  const alarms = data?.data ?? [];
  const isEmpty = !isLoading && alarms.length === 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -10}}
        transition={{duration: 0.2}}
        className='bg-gray flex w-[421px] flex-col gap-6 p-9 shadow-lg'>
        <strong className='text-2xl font-bold text-white'>알림</strong>

        <div className='flex min-h-[200px] flex-col'>
          {isLoading && (
            <div className='flex flex-1 items-center justify-center text-white'>
              Loading...
            </div>
          )}

          {isEmpty && (
            <div className='flex flex-1 items-center justify-center text-sm text-gray-300'>
              아직 도착한 알림이 없어요
            </div>
          )}

          {!isLoading && !isEmpty && (
            <ul className='scrollable flex max-h-[60vh] flex-col gap-3'>
              {alarms.map((alarm) => (
                <AlarmItem
                  key={alarm.alertId}
                  onClick={() => router.push(`${ROUTES.IDEA}/${alarm.ideaId}`)}
                  content={alarm.content}
                  date={formatAlarmDate(alarm.createdAt)}
                  onDelete={() => handleDelete(alarm.alertId)}
                />
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
