window.onload = init;
function init() {
	window.onload = init;

function init() {

	// JQuery function attached to the submit event of the form with id "form"
	$('#loadTable').click(function (e) {
		// e.preventDefualt to avoid the form being submitted to page specified in action attribute 
   		 e.preventDefault();
   		 // fadeIn is a jQuery function to fadeIn an element 
   		 $(".overlay-container").fadeIn(1000, function(){
   		 		// call the createTableFromJSON function
   		 		createTableFromJSON();
		   		 // fadeOut is a jQuery function to fadeOut an element 
   		 		$('.overlay-container').delay(500).fadeOut(500);
   		 })
	});

}

function createTableFromJSON() {
        var myBooks = [
            {
                "Student ID": "1",
                "Name": "John Doe",
                "Email": "jd@gmail.com",
                "Marks": "92.60"
            },
            {
                "Student ID": "2",
                "Name": "Mark",
                "Email": "mark@gmail.com",
                "Marks": "56.00"
            },
            {
                "Student ID": "3",
                "Name": "Sam",
                "Email": "sam@@gmail.com",
                "Marks": "90.40"
            }
        ]

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Student ID', 'Name', 'Email' and 'Marks')
        var col = [];
        for (var i = 0; i < myBooks.length; i++) {
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        // this loops through the Mybooks object
        for (var i = 0; i < myBooks.length; i++) {

        	// create a row for each object row and add to the end of the table
            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
				// create a cell for each object column and add to the end of the row
                var tabCell = tr.insertCell(-1);
                // add HTML data to the TableCell
                // select i'th value from mybooks 
                // then select the element with key equal to col[j] from the value selected before 
                // Eg: mybooks[0][col[0]], mybooks[0][col[1]], mybooks[0][col[2]]
                // col[0] = Student ID, col[1] = Name, col[3] = Email
                // mybooks[0][col[0]] = 1, mybooks[0][col[1]] = John Doe
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("json_table");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }