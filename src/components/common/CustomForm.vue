<template>
  <v-row>
    <v-col cols="12" sm="4">
      <v-label class="font-weight-medium mb-2" for="fcname">Name</v-label>
      <v-text-field
        variant="outlined"
        id="fcname"
        placeholder="Enter Text"
        color="primary"
      ></v-text-field>
      <v-label class="font-weight-medium mb-2" for="fcseldrop">Select Dropdown</v-label>
      <v-select
        :items="items"
        item-title="items"
        item-value="abbr"
        return-object
        single-line
        variant="outlined"
        v-model="select"
        id="fcseldrop"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="4">
      <v-label class="font-weight-medium mb-2" for="fccnm">Company Name</v-label>
      <v-text-field
        variant="outlined"
        placeholder="Enter Text"
        id="fccnm"
        color="primary"
      ></v-text-field>
      <v-label class="font-weight-medium mb-2" for="fctime">Time</v-label>
      <v-text-field
        variant="outlined"
        placeholder="hh:mm"
        id="fctime"
        type="time"
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="4">
      <v-label class="font-weight-medium mb-2" for="fcindtype">Industry Type</v-label>
      <v-text-field
        variant="outlined"
        placeholder="Disabled Filled"
        id="fcindtype"
        color="primary"
      ></v-text-field>
      <v-label class="font-weight-medium mb-2" for="fcdt">Date</v-label>
      <v-text-field variant="outlined" type="date" id="fcdt" color="primary"></v-text-field>
    </v-col>

    <v-col cols="12">
      <v-label class="font-weight-medium mb-2" for="gndr">Lorem ipsum dolor sit amet</v-label>

      <v-radio-group inline v-model="radios">
        <v-row>
          <v-col cols="12" md="4"
            ><v-radio label="Male" color="primary" value="Male" id="gndr"></v-radio
          ></v-col>
          <v-col cols="12" md="4"
            ><v-radio label="Female" color="primary" value="Female" id="gndr2"></v-radio
          ></v-col>
          <v-col cols="12" md="4"
            ><v-radio
              label="Disabled"
              color="primary"
              value="Disabled"
              id="gndr3"
              disabled
            ></v-radio
          ></v-col>
        </v-row>
      </v-radio-group>

      <v-label class="font-weight-medium mb-2" for="isdtype">Industry Type</v-label>
      <v-row>
        <v-col cols="12" md="4">
          <v-checkbox
            v-model="checked"
            color="primary"
            label="Enter text"
            id="isdtype"
          ></v-checkbox>
        </v-col>
        <v-col cols="12" md="4">
          <v-checkbox label="Enter text" color="primary" id="isdtype2"></v-checkbox>
        </v-col>
        <v-col cols="12" md="4">
          <v-checkbox label="Disabled" id="isdtype3" disabled></v-checkbox>
        </v-col>
      </v-row>
      <v-label class="font-weight-medium mb-2 mt-4" for="swtch">Switch</v-label>
      <v-row>
        <v-col cols="12" md="3" sm="6">
          <v-switch
            v-model="model"
            hide-details
            color="primary"
            label="Enter text"
            id="swtch"
            inset
          ></v-switch>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-switch hide-details color="primary" label="Enter text" id="swtch2" inset></v-switch>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-switch hide-details label="Disabled" disabled inset id="swtch3"></v-switch>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-switch
            hide-details
            label="Disabled"
            v-model="model"
            color="primary"
            id="swtch4"
            disabled
            inset
          ></v-switch>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col cols="12" md="6">
          <v-btn color="primary" class="mr-3" rounded="pill">add new</v-btn>
          <v-btn color="primary" class="mr-3" disabled rounded="pill">add new</v-btn>
          <v-btn color="primary" variant="outlined" class="mr-3" rounded="pill">add new</v-btn>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-end">
          <v-btn color="info" class="mr-3" rounded="pill">add new</v-btn>
          <v-btn color="success" rounded="pill">add new</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'
const select = ref('One')
const items = ref(['One', 'Two', 'Three', 'Four'])
const radios = ref('Male')
const checked = ref(true)
const model = ref(true)
</script>
