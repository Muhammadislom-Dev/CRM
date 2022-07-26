const Rating = () => {

    

    const data = {
        labels: [
          'Red',
          'Green',
          'Yellow',
          'violet'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 180, 100, 80],
          backgroundColor: [
            'rgb(255, 99, 132)',
            '#55B963',
            'rgb(255, 205, 86)',
            '#8D7CC1'
          ],
          hoverOffset: 4
        }]
      };


      const config = {
        type: 'doughnut',
        data: data,
      };
      // </block:config>
      
      module.exports = {
        actions: [],
        config: config,
      };
    return(
        <div className="rating">

        </div>
    )
}

export default Rating
