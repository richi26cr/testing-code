import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private menuData:MenuData[] = [
    {
      title: "Tab Label 1",
      description: "1 Surtsey (Surtrs island in Icelandic, Icelandic pronunciation: sr(t)sˌei]) is a volcanic island located in the Vestmannaeyjar archipelago off the southern coast of Iceland. At  WikiMiniAtlas63.303°N 20.605°WCoordinates: 63.303°N 20.605°W, Surtsey is the southernmost point of Iceland.[1] It was formed in a volcanic eruption which began 130 metres (430 feet) below sea level, and reached the surface on 14 November 1963. The eruption lasted until 5 June 1967, when the island reached its maximum size of 2.7 km2 (1.0 sq mi). Since then, wave erosion has caused the island to steadily diminish in size: as of 2012, its surface area was 1.3 km2 (0.50 sq mi).[2] The most recent survey (2007) shows the islands maximum elevation at 155 m (509 ft) above sea level.[3]",
      image: "assets/img1.png",
      imgTitle:"Surtsey, sixteen days after the onset of the eruption 1"
    },
    {
      title: "Tab Label 2",
      description: "2 Surtsey (Surtrs island in Icelandic, Icelandic pronunciation: sr(t)sˌei]) is a volcanic island located in the Vestmannaeyjar archipelago off the southern coast of Iceland. At  WikiMiniAtlas63.303°N 20.605°WCoordinates: 63.303°N 20.605°W, Surtsey is the southernmost point of Iceland.[1] It was formed in a volcanic eruption which began 130 metres (430 feet) below sea level, and reached the surface on 14 November 1963. The eruption lasted until 5 June 1967, when the island reached its maximum size of 2.7 km2 (1.0 sq mi). Since then, wave erosion has caused the island to steadily diminish in size: as of 2012, its surface area was 1.3 km2 (0.50 sq mi).[2] The most recent survey (2007) shows the islands maximum elevation at 155 m (509 ft) above sea level.[3]",
      image: "assets/img2.png",
      imgTitle:"Surtsey, sixteen days after the onset of the eruption 2"
    },
    {
      title: "Tab Label 3",
      description: "3 Surtsey (Surtrs island in Icelandic, Icelandic pronunciation: sr(t)sˌei]) is a volcanic island located in the Vestmannaeyjar archipelago off the southern coast of Iceland. At  WikiMiniAtlas63.303°N 20.605°WCoordinates: 63.303°N 20.605°W, Surtsey is the southernmost point of Iceland.[1] It was formed in a volcanic eruption which began 130 metres (430 feet) below sea level, and reached the surface on 14 November 1963. The eruption lasted until 5 June 1967, when the island reached its maximum size of 2.7 km2 (1.0 sq mi). Since then, wave erosion has caused the island to steadily diminish in size: as of 2012, its surface area was 1.3 km2 (0.50 sq mi).[2] The most recent survey (2007) shows the islands maximum elevation at 155 m (509 ft) above sea level.[3]",
      image: "assets/img1.png",
      imgTitle:"Surtsey, sixteen days after the onset of the eruption 3"
    },
    {
      title: "Tab Label 4",
      description: "4 Surtsey (Surtrs island in Icelandic, Icelandic pronunciation: sr(t)sˌei]) is a volcanic island located in the Vestmannaeyjar archipelago off the southern coast of Iceland. At  WikiMiniAtlas63.303°N 20.605°WCoordinates: 63.303°N 20.605°W, Surtsey is the southernmost point of Iceland.[1] It was formed in a volcanic eruption which began 130 metres (430 feet) below sea level, and reached the surface on 14 November 1963. The eruption lasted until 5 June 1967, when the island reached its maximum size of 2.7 km2 (1.0 sq mi). Since then, wave erosion has caused the island to steadily diminish in size: as of 2012, its surface area was 1.3 km2 (0.50 sq mi).[2] The most recent survey (2007) shows the islands maximum elevation at 155 m (509 ft) above sea level.[3]",
      image: "assets/img2.png",
      imgTitle:"Surtsey, sixteen days after the onset of the eruption 4"
    },
    {
      title: "Tab Label 5",
      description: "5 Surtsey (Surtrs island in Icelandic, Icelandic pronunciation: sr(t)sˌei]) is a volcanic island located in the Vestmannaeyjar archipelago off the southern coast of Iceland. At  WikiMiniAtlas63.303°N 20.605°WCoordinates: 63.303°N 20.605°W, Surtsey is the southernmost point of Iceland.[1] It was formed in a volcanic eruption which began 130 metres (430 feet) below sea level, and reached the surface on 14 November 1963. The eruption lasted until 5 June 1967, when the island reached its maximum size of 2.7 km2 (1.0 sq mi). Since then, wave erosion has caused the island to steadily diminish in size: as of 2012, its surface area was 1.3 km2 (0.50 sq mi).[2] The most recent survey (2007) shows the islands maximum elevation at 155 m (509 ft) above sea level.[3]",
      image: "assets/img1.png",
      imgTitle:"Surtsey, sixteen days after the onset of the eruption 5"
    },
    {
      title: "Tab Label 6",
      description: "6 Surtsey (Surtrs island in Icelandic, Icelandic pronunciation: sr(t)sˌei]) is a volcanic island located in the Vestmannaeyjar archipelago off the southern coast of Iceland. At  WikiMiniAtlas63.303°N 20.605°WCoordinates: 63.303°N 20.605°W, Surtsey is the southernmost point of Iceland.[1] It was formed in a volcanic eruption which began 130 metres (430 feet) below sea level, and reached the surface on 14 November 1963. The eruption lasted until 5 June 1967, when the island reached its maximum size of 2.7 km2 (1.0 sq mi). Since then, wave erosion has caused the island to steadily diminish in size: as of 2012, its surface area was 1.3 km2 (0.50 sq mi).[2] The most recent survey (2007) shows the islands maximum elevation at 155 m (509 ft) above sea level.[3]",
      image: "assets/img2.png",
      imgTitle:"Surtsey, sixteen days after the onset of the eruption 6"
    },
    {
      title: "Tab Label 7",
      description: "7 Surtsey (Surtrs island in Icelandic, Icelandic pronunciation: sr(t)sˌei]) is a volcanic island located in the Vestmannaeyjar archipelago off the southern coast of Iceland. At  WikiMiniAtlas63.303°N 20.605°WCoordinates: 63.303°N 20.605°W, Surtsey is the southernmost point of Iceland.[1] It was formed in a volcanic eruption which began 130 metres (430 feet) below sea level, and reached the surface on 14 November 1963. The eruption lasted until 5 June 1967, when the island reached its maximum size of 2.7 km2 (1.0 sq mi). Since then, wave erosion has caused the island to steadily diminish in size: as of 2012, its surface area was 1.3 km2 (0.50 sq mi).[2] The most recent survey (2007) shows the islands maximum elevation at 155 m (509 ft) above sea level.[3]",
      image: "assets/img1.png",
      imgTitle:"Surtsey, sixteen days after the onset of the eruption 7"
    }
  ];

  constructor() { }

  getData(): MenuData[]{
    return this.menuData;
  }
}


export interface MenuData{
  title: string;
  description: string;
  image: string;
  imgTitle: string;
};
