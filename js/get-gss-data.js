function getGSSData() {

    var protocol = location.href.split(':')[0] == 'https' ? 'https' : 'http'

    var gss_url = protocol + '://spreadsheets.google.com/feeds/cells/1hTQCQs5Bq47czk9qXjvaqotl4IVjOGqWFYllke66O8Y/1/public/values'

    // var gss_data_num = 0;
    // var gss_row_num = 0;
    // var gss_col_num = 0;
    var gss_data = new Array()

    var get_gss_json = getGSSData(gss_url)

    return new Promise((resolve, reject) => {
        get_gss_json.done(function(result) {
            var json_data = result.feed.entry

            /* 実データ部の数 */
            // gss_data_num = json_data.length;

            /* 使用するデータを "japan_prefectures_data" に格納 */
            // var data_length = json_data.length
            // i = data_length / 2

            // while(i < data_length) {
            //     alert(json_data[i]['content']['$t'])
            //     i++
            // }

            resolve(json_data)

        })
    })

    // Google SpreadSheet のデータを JSON 形式で取得
    function getGSSData(url) {

        var ajax_request = $.ajax({
            type: 'GET',
            url: url + '?alt=json',
            dataType: 'jsonp',
            cache: false
        })

        return ajax_request

    }

}
