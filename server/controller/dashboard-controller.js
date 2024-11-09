const {
    singleValues,
    timeSeriesData,
    topVendors,
    updateDataOverTime,
} = require("../util/data");

const getRealTimeData = async (req, res) => {
    // Emit initial data to new connections

    // Emit initial data once on connection
    global.io.on("connection", (socket) => {
        // Emit initial data once on connection
        socket.emit("initialData", {
            singleValues,
            timeSeriesData,
            topVendors,
        });

        // Set up the interval to emit updateData every 5 seconds
        const intervalId = setInterval(() => {
            updateDataOverTime();

            // Emit updated data to the connected client
            socket.emit("updateData", {
                singleValues,
                timeSeriesData,
                topVendors,
            });
        }, 5000);

        // Clear the interval on disconnect
        socket.on("disconnect", () => {
            clearInterval(intervalId);
            console.log(
                `Client disconnected, cleared interval with id: ${intervalId}`
            );
        });
    });

    // Clear the interval on disconnect

    // res.send("Real-time data streaming setup.");
};

module.exports = { getRealTimeData };
