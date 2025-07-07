import { CheckIcon, XIcon, MinusIcon } from 'vue-tabler-icons'

const AttendanceData = [
  {
    name: '학생1',
    class: '10',
    day1: CheckIcon,
    day2: XIcon,
    day3: MinusIcon,
  },
  {
    name: '학생2',
    class: '12',
    day1: CheckIcon,
    day2: CheckIcon,
    day3: XIcon,
  },
  {
    name: '학생3',
    class: '2',
    day1: CheckIcon,
    day2: CheckIcon,
    day3: CheckIcon,
  },
  {
    name: '학생4',
    class: '2',
    day1: CheckIcon,
    day2: CheckIcon,
    day3: CheckIcon,
  },
  {
    name: '학생5',
    class: '8',
    day1: CheckIcon,
    day2: CheckIcon,
    day3: MinusIcon,
  },
  {
    name: '학생6',
    class: '12',
    day1: MinusIcon,
    day2: MinusIcon,
    day3: XIcon,
  },
  {
    name: '학생7',
    class: '6',
    day1: CheckIcon,
    day2: CheckIcon,
    day3: CheckIcon,
  },
  {
    name: '학생8',
    class: '7',
    day1: XIcon,
    day2: CheckIcon,
    day3: MinusIcon,
  },
]

export { AttendanceData }
