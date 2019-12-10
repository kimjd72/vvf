<template>
  <v-card class="pa-2">
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.no }}</td>
        <td class="text-xs-left">{{ props.item.codeSe }}</td>
        <td class="text-xs-left">{{ props.item.code }}</td>
        <td class="text-xs-left">{{ props.item.codeNm }}</td>
        <td class="text-xs-center">{{ props.item.sortOrdr }}</td>
        <td class="text-xs-center">{{ props.item.updtDt }}</td>
      </template>
      <div class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      search: '',
      pagination: { rowsPerPage: 2 },
      selected: [],
      headers: [
        {
          text: 'No',
          align: 'center',
          sortable: false,
          name: 'no'
        },
        {
          text: '코드구분',
          align: 'center',
          sortable: false,
          name: 'codeSe'
        },
        {
          text: '코드',
          align: 'center',
          sortable: false,
          name: 'code'
        },
        {
          text: '코드명',
          align: 'center',
          sortable: false,
          name: 'codeNm'
        },
        {
          text: '정렬순서',
          align: 'center',
          sortable: false,
          name: 'sortOrdr'
        },
        {
          text: '수정일자',
          align: 'center',
          sortable: false,
          name: 'updtDt'
        }
      ],
      items: [
        {
          no: '1',
          codeSe: 'MLG_SE_DETAIL_CODE',
          code: 'ADD_ETC1',
          codeNm: '임의적립1',
          sortOrdr: 1,
          updtDt: Date('2019-12-01')
        },
        {
          no: '2',
          codeSe: 'MLG_SE_DETAIL_CODE',
          code: 'ADD_ETC2',
          codeNm: '임의적립2',
          sortOrdr: 2,
          updtDt: Date('2019-12-01')
        },
        {
          no: '3',
          codeSe: 'MLG_SE_DETAIL_CODE',
          code: 'ADD_ETC3',
          codeNm: '임의적립3',
          sortOrdr: 3,
          updtDt: Date('2019-12-01')
        }
      ]
    }
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  }
}
</script>
