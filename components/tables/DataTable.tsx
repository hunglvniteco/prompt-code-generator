<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Table</title>
    <script src="https://unpkg.com/table-cell/standalone/umd(table-cell).js"></script>
    <style>
        .zebra-striped {
            background-color: #f4d7da;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 0;
        }

        td {
            padding: 25px;
        }

        th {
            background-color: #f4d7da;
            color: #333;
            text-align: left;
            padding: 25px;
            border-bottom: 1px solid #ddd;
        }

        th:hover {
            background-color: #e0e0e0;
        }

        .sticky-header {
            position: sticky;
            top: 0;
            transform: translateY(-50%);
            animation: sticky 0.5s infinite;
            padding-left: 300px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }

        .sticky-header.active {
            left: 200px;
        }

        table groups {
            @media (max-width: 768px) {
                .sticky-header {
                    left: 150px;
                }
                
                th {
                    background-color: #f8f9fa;
                }
            }
        }

        .row-selected {
            aria-selected: true;
            cursor: pointer;
        }

        table-row-bind {
            @keyframes sort-column-stile {
                from { transform: translateY(20px); }
                to { transform: translateY(-20px); }
            }
        }

        @media (max-width: 768px) {
            .sticky-header {
                left: 150px;
            }

            th {
                background-color: #f8f9fa;
            }
        }
    </style>
</head>
<body>
    <table class="sticky-header" id="data-table">
        <thead>
            <tr>
                <th>
                    <button class="zebra-striped zebra-striped/alternate" onclick="window.scrollTo()">Header</button>
                    <button class="zebra-striped zebra-striped/alternate active" onclick="window.scrollTo()">Sort</button>
                </th>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
            </tr>
        </thead>
        <tbody id="data-tableBody">
            <!-- Data will be added here with table-row-bind -->
        </tbody>
    </table>

    <script>
        const header = document.querySelector('th');
        const sortButton = document.querySelector('button zebra-striped zebra-striped/alternate');
        const dataRow = document.querySelector('tr');

        // Add sorting functionality
        let isSorted = false;

        function toggleSort() {
            isSorted = !isSorted;
            row.bind('sort', (e) => {
                e.dataTransfer.sort = isSorted;
            });
        }

        if (isSorted) {
            row.bind('sort', (e) => {
                this.classList.toggle('zebra-striped');
            });
        }
    </script>