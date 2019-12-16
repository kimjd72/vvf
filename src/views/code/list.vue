<template>
  <v-container grid-list-xs12>
    <v-layout justify-center>
      <v-flex xs12>
        <v-card flat>
          <v-flex xs4>
            <v-card-title class="justify-start">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                @click:append="onSearch"
                @keypress.enter.stop="onSearch"
              ></v-text-field>
            </v-card-title>
          </v-flex>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
              :pagination.sync="pagination"
              class="elevation-1"
            >
              <template v-slot:items="props" dense>
                <td class="text-xs-center">{{ props.item.no }}</td>
                <td class="text-xs-left">{{ props.item.codeSe }}</td>
                <td class="text-xs-left">{{ props.item.code }}</td>
                <td class="text-xs-left">{{ props.item.codeNm }}</td>
                <td class="text-xs-center">{{ props.item.sortOrdr }}</td>
                <td class="text-xs-center">{{ props.item.updtDt }}</td>
              </template>
            </v-data-table>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
          </v-card-actions>
          <v-card-actions class="justify-end pr-3">
            <v-btn color="grey">등록</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      search: '',
      pagination: {},
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
        },
        {
          no: '4',
          codeSe: 'MLG_SE_DETAIL_CODE',
          code: 'ADD_ETC1',
          codeNm: '임의적립1',
          sortOrdr: 1,
          updtDt: Date('2019-12-01')
        },
        {
          no: '5',
          codeSe: 'MLG_SE_DETAIL_CODE',
          code: 'ADD_ETC2',
          codeNm: '임의적립2',
          sortOrdr: 2,
          updtDt: Date('2019-12-01')
        },
        {
          no: '6',
          codeSe: 'MLG_SE_DETAIL_CODE',
          code: 'ADD_ETC3',
          codeNm: '임의적립3',
          sortOrdr: 3,
          updtDt: Date('2019-12-01')
        }
      ]
    }
  },
  methods: {
    onSearch () {
      console.log('search:' + this.search)
    }
  },
  computed: {
    pages () {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) {
        return 0
      }

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      )
    }
  }
}
</script>
