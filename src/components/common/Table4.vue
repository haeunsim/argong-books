<template>
  <v-card elevation="0" class="mt-6 border">
    <div class="border-table">
      <v-table class="month-table">
        <thead>
          <tr>
            <th class="text-subtitle-1 font-weight-semibold">Mission</th>
            <th class="text-subtitle-1 font-weight-semibold">Books</th>
            <th class="text-subtitle-1 font-weight-semibold">Period</th>
            <th class="text-subtitle-1 font-weight-semibold">Progress</th>
            <th class="text-subtitle-1 font-weight-semibold">Status</th>
            <th class="text-subtitle-1 font-weight-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in basicTableData" :key="item.name" class="month-item">
            <td>
              <h6 class="text-subtitle-1 font-weight-semibold text-no-wrap">{{ item.mission }}</h6>
              <span class="text-body-2">{{ item.created }}</span>
            </td>
            <td>
              <ul style="padding-left: 16px; margin: 0">
                <li v-for="book in item.books" :key="book">{{ book }}</li>
              </ul>
            </td>
            <td>
              {{ item.period }}
            </td>
            <td>
              <div class="d-flex align-center">
                <span class="text-body-2 mr-2">{{ item.completed }}/{{ item.total }}</span>
                <v-progress-linear
                  color="primary"
                  rounded="sm"
                  :model-value="item.progress"
                ></v-progress-linear>
                <span class="text-body-2 ml-2">{{ item.progress }}%</span>
              </div>
            </td>
            <td>
              <v-chip
                rounded="pill"
                class="font-weight-medium py-4 pl-1 pr-2"
                :color="item.statuscolor"
                size="small"
              >
                <component :is="item.statusicon" stroke-width="2" size="18" class="mr-1" />
                {{ item.status }}
              </v-chip>
            </td>
            <td>
              <v-btn size="30" icon variant="flat" class="grey100">
                <v-avatar size="22">
                  <DotsVerticalIcon size="20" color="grey100" />
                </v-avatar>
                <v-menu activator="parent">
                  <v-list>
                    <v-list-item
                      value="action"
                      v-for="list in tableActionData"
                      :key="list.listtitle"
                      hide-details
                      min-height="38"
                    >
                      <v-list-item-title>
                        <v-avatar size="20" class="mr-2">
                          <component :is="list.icon" stroke-width="2" size="20" />
                        </v-avatar>
                        {{ list.listtitle }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-card>
</template>

<script setup>
import { PlusIcon, EditIcon, TrashIcon, CheckIcon, XIcon, ArrowBackUpIcon } from 'vue-tabler-icons'
import img1 from '@/assets/images/user1.jpg'
import img2 from '@/assets/images/user2.jpg'
import img3 from '@/assets/images/user3.jpg'
import img4 from '@/assets/images/user4.jpg'
import img5 from '@/assets/images/user5.jpg'
import img6 from '@/assets/images/user6.jpg'

const tableActionData = [
  {
    icon: PlusIcon,
    listtitle: 'Add',
  },
  {
    icon: EditIcon,
    listtitle: 'Edit',
  },
  {
    icon: TrashIcon,
    listtitle: 'Delete',
  },
]

const basicTableData = [
  {
    mission: 'Read 3 books',
    created: '2025.06.05',
    books: ['Puss in Boots', 'The Ugly Duckling', 'Ant, Bag and Cat'],
    period: '2025.06.05 - 2025.07.05',
    completed: 4,
    total: 18,
    progress: 22,
    status: '진행중',
    statuscolor: 'primary',
    statusicon: CheckIcon,
    avatar: img1,
    name: 'Olivia Rhye',
    handle: 'olivia@ui.com',
  },
  {
    mission: 'Read 2 English fairy tales',
    created: '2025.05.20',
    books: ['The Little Prince', 'Alice in Wonderland'],
    period: '2025.05.20 - 2025.06.10',
    completed: 10,
    total: 20,
    progress: 50,
    status: '진행중',
    statuscolor: 'primary',
    statusicon: CheckIcon,
    avatar: img2,
    name: 'Barbara Steele',
    handle: 'steele@ui.com',
  },
  {
    mission: 'Read a science book',
    created: '2025.04.15',
    books: ['Science Magic', 'Space Adventure'],
    period: '2025.04.15 - 2025.05.15',
    completed: 18,
    total: 18,
    progress: 100,
    status: '종료됨',
    statuscolor: 'success',
    statusicon: CheckIcon,
    avatar: img3,
    name: 'Leonard Gordon',
    handle: 'leonard@ui.com',
  },
  {
    mission: 'Read Korean history stories',
    created: '2025.03.10',
    books: ['한국사 첫걸음', '조선의 영웅들'],
    period: '2025.03.10 - 2025.04.10',
    completed: 2,
    total: 15,
    progress: 13,
    status: '대기중',
    statuscolor: 'secondary',
    statusicon: ArrowBackUpIcon,
    avatar: img4,
    name: 'Evelyn Pope',
    handle: 'evelyn@ui.com',
  },
  {
    mission: 'Read 1 classic novel',
    created: '2025.06.01',
    books: ['Les Misérables'],
    period: '2025.06.01 - 2025.06.30',
    completed: 0,
    total: 10,
    progress: 0,
    status: '대기중',
    statuscolor: 'secondary',
    statusicon: ArrowBackUpIcon,
    avatar: img5,
    name: 'Tommy Garza',
    handle: 'tommy@ui.com',
  },
  {
    mission: 'Read a math picture book',
    created: '2025.05.10',
    books: ['Math Story', 'Number World'],
    period: '2025.05.10 - 2025.06.10',
    completed: 7,
    total: 14,
    progress: 50,
    status: '진행중',
    statuscolor: 'primary',
    statusicon: CheckIcon,
    avatar: img6,
    name: 'Isabel Vasquez',
    handle: 'isabel@ui.com',
  },
  {
    mission: "Read 5 children's books",
    created: '2025.04.01',
    books: ['Cinderella', 'Snow White', 'Rapunzel'],
    period: '2025.04.01 - 2025.05.01',
    completed: 5,
    total: 20,
    progress: 25,
    status: '진행중',
    statuscolor: 'primary',
    statusicon: CheckIcon,
    avatar: img1,
    name: 'Olivia Rhye',
    handle: 'olivia@ui.com',
  },
  {
    mission: 'Read and write',
    created: '2025.03.20',
    books: ['Save the Earth', 'Green Planet'],
    period: '2025.03.20 - 2025.04.20',
    completed: 12,
    total: 16,
    progress: 75,
    status: '종료됨',
    statuscolor: 'success',
    statusicon: CheckIcon,
    avatar: img2,
    name: 'Barbara Steele',
    handle: 'steele@ui.com',
  },
  {
    mission: 'Read a Korean literature book',
    created: '2025.02.15',
    books: ['토지', '태백산맥'],
    period: '2025.02.15 - 2025.03.15',
    completed: 8,
    total: 12,
    progress: 67,
    status: '종료됨',
    statuscolor: 'success',
    statusicon: CheckIcon,
    avatar: img3,
    name: 'Leonard Gordon',
    handle: 'leonard@ui.com',
  },
  {
    mission: 'Read an English novel',
    created: '2025.01.10',
    books: ['Harry Potter', 'Charlie and the Chocolate Factory'],
    period: '2025.01.10 - 2025.02.10',
    completed: 3,
    total: 15,
    progress: 20,
    status: '진행중',
    statuscolor: 'primary',
    statusicon: CheckIcon,
    avatar: img4,
    name: 'Evelyn Pope',
    handle: 'evelyn@ui.com',
  },
  {
    mission: 'Read a world history book',
    created: '2025.05.25',
    books: ['World History', 'Ancient Civilizations'],
    period: '2025.05.25 - 2025.06.25',
    completed: 6,
    total: 18,
    progress: 33,
    status: '진행중',
    statuscolor: 'primary',
    statusicon: CheckIcon,
    avatar: img5,
    name: 'Tommy Garza',
    handle: 'tommy@ui.com',
  },
  {
    mission: 'Read an animal story book',
    created: '2025.06.10',
    books: ['Animal Farm', 'The Jungle Book'],
    period: '2025.06.10 - 2025.07.10',
    completed: 1,
    total: 10,
    progress: 10,
    status: '대기중',
    statuscolor: 'secondary',
    statusicon: ArrowBackUpIcon,
    avatar: img6,
    name: 'Isabel Vasquez',
    handle: 'isabel@ui.com',
  },
]
</script>

<style scoped>
.v-progress-linear {
  left: 0 !important;
  transform: none !important;
  position: relative;
  width: 70%;
}
</style>
