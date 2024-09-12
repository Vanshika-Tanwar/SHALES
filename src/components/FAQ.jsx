import { Accordion } from 'flowbite-react'
import React from 'react'
import Ques from '../assets/ques.png'
import FAQIcon from '../assets/faq.png'

function FAQ() {
  return (
    <div className='mt-72 mb-16'>
    <img src={FAQIcon} /> 
    <div className='flex ml-48 w-200'>   
      <div className="w-1/2">
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title>How far in advance should I book my whale-watching excursion?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              We recommend booking your whale-watching trip as far in advance as possible to ensure availability, especially during peak seasons. However, we also accommodate last-minute bookings whenever possible. To secure your preferred date and yacht, we advise booking at least two weeks in advance.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title> Are children allowed on the whale-watching tours?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, children are welcome on our whale-watching tours! We offer family-friendly experiences suitable for all ages. However, for safety reasons, children must be accompanied by a responsible adult at all times. Please note that certain age restrictions may apply to specific yacht models or tours.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>What happens if the weather is unfavorable on the day of my booked tour?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              The safety and comfort of our guests are our top priorities. In the event of inclement weather or unsafe sea conditions, we may need to reschedule or cancel the tour. If your tour is canceled due to weather-related reasons, we will do our best to accommodate you on an alternative date or provide a full refund, according to our cancellation policy.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Can I customize my whale-watching experience with additional services such as photography or catering?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Absolutely! We offer a range of customizable options to enhance your whale-watching adventure. Whether you'd like to hire a professional photographer to capture your memories, enjoy gourmet catering onboard, or add live music entertainment, we can tailor your experience to suit your preferences. Simply let us know your requirements during the booking process, and we'll take care of the rest.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>What to pack?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              We recommend bringing the following items to ensure you have a comfortable and enjoyable experience:
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  Sunscreen and sunglasses are a must. Don't forget your suncaps/hats too.
                </li>
                <li>
                  Comfortable clothing and layers, as temperatures may vary on the water.
                </li>
                <li>
                  Binoculars for a closer view of the whales and marine wildlife.
                </li>
                <li>
                  Camera or smartphone to capture memorable moments (if you haven't opted for a professional photographer).
                </li>
                <li>
                  Motion sickness medication, if you're prone to seasickness. Any personal medication or necessities you may require.
                </li>
            </ul>
            <p>
            Additionally, don't forget to check the specific guidelines provided in your booking confirmation for any additional recommendations or requirements.
            </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src={Ques} alt="" className="max-w-full" />
      </div>
    </div>
    </div>
    
  )
}

export default FAQ