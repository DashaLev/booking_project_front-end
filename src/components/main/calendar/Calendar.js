import React, { useState } from 'react'
import {format} from 'date-fns';
import { enGB } from 'date-fns/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import './calendar.css'

export const Calendar = () => {
    const dateToday = new Date()

    const [startDate, setStartDate] = useState(dateToday)

    const [endDate, setEndDate] = useState()

    const [focus, setFocus] = useState(START_DATE)

    const handleFocusChange = newFocus => {
        setFocus(newFocus ||START_DATE)
    }


    return (
        <div className={'w-40 m-0-a'}>
            <p>Start date: {startDate ? format(startDate, 'dd MMM yyyy' ) : 'Date is not selected'}</p>
            <p>End date: {endDate ? format(endDate, 'dd MMM yyyy') : 'Date is not selected'}.</p>
            {/*<p>Currently selecting: {focus}.</p>*/}
            <DateRangePickerCalendar
                startDate={startDate}
                endDate={endDate}
                focus={focus}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                onFocusChange={handleFocusChange}
                locale={enGB}
            />
        </div>
    )
}
